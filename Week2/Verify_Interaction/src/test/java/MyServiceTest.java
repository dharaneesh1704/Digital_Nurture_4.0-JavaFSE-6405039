import org.example.ExternalApi;
import org.example.MyService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Optional: Stub the mock's behavior if you want
        when(mockApi.getData()).thenReturn("mock data");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Call the method under test
        String result = service.fetchData();

        // Verify the interaction happened exactly once
        verify(mockApi, times(1)).getData();

        // Optionally assert returned value
        assert result.equals("mock data");
    }
}
